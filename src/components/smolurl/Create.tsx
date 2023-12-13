import { Button } from "@smolurl/components/ui/Button";
import Input from "@smolurl/components/ui/Input";
import APIHandler from "@smolurl/handlers/APIHandler";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Create() {
	document.title = "SmolURL | Create";
	const { redirectUrl } = useParams();
	const [shortValues, setShortValues] = useState({
		shortName: "",
		fullURL: "",
	});
	const [shortResponse, setShortResponse] = useState({ valid: false, data: "" });
	const {
		data: redirectData,
		isSuccess: isFetchedShortUrlCheckSuccess,
		error: redirectDataError,
		isError: isFetchedLogStatsError,
	} = useQuery({
		queryKey: ["ShortUrlCheck", redirectUrl],
		queryFn: () => APIHandler.getSmolURL(redirectUrl!),
		retry: 0,
		enabled: !!redirectUrl,
	});
	useEffect(() => {
		if (isFetchedShortUrlCheckSuccess) {
			try {
				new URL(redirectData.url);
				window.location.href = redirectData.url;
			} catch (e) {
				setShortResponse({ valid: true, data: redirectData });
			}
		}
		if (isFetchedLogStatsError) {
			setShortResponse({
				valid: false,
				data: (redirectDataError as AxiosError<{ error: string }>)?.response?.data.error ?? "Error",
			});
		}
	}, [redirectData, isFetchedShortUrlCheckSuccess, redirectDataError, isFetchedLogStatsError]);

	const urlShortener = useMutation({
		mutationFn: APIHandler.addShortURL,
		onSuccess: (data) => {
			setShortResponse({ valid: true, data: data?.message ?? "Success" });
		},
		onError: (data) => {
			setShortResponse({
				valid: false,
				data: (data as AxiosError<{ error: string }>)?.response?.data?.error ?? "Error",
			});
		},
	});
	return (
		<div
			className="home p-5 flex flex-col items-center justify-center gap-5 min-h-[theme(spacing.fit-screen)]"
			id="main"
		>
			{!!shortResponse.data.length && (
				<p className={`border ${shortResponse.valid ? "border-green-500" : "border-red-500"}  p-5 w-full`}>
					{shortResponse.data}
				</p>
			)}
			<form
				className="flex flex-col justify-start items-start gap-5 w-3/4"
				onSubmit={(e) => {
					e.preventDefault();
					urlShortener.mutate(shortValues);
				}}
			>
				<div className="flex flex-col gap-2 w-full">
					<label className="text-xl font-bold">Short Name</label>
					<Input
						className="w-full"
						required
						as="input"
						type="text"
						value={shortValues.shortName ?? ""}
						onChange={(e) => {
							setShortValues((curr) => {
								curr.shortName = e.target.value;
								return structuredClone(curr);
							});
						}}
						placeholder={"Short Name"}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label className="text-xl font-bold">Full URL</label>
					<Input
						className="w-full"
						required
						as="input"
						type="text"
						value={shortValues.fullURL ?? ""}
						onChange={(e) => {
							setShortValues((curr) => {
								curr.fullURL = e.target.value;
								return structuredClone(curr);
							});
						}}
						placeholder={"Full URL"}
					/>
				</div>
				<Button className="w-full">Shorten URL</Button>
			</form>
			<div className="border-2 border-border p-5 text-2xl w-full text-justify">
				<p className="text-2xl underline text-center mb-2">Notes</p>
				<ol className="list-decimal pl-5">
					<li>One URL can have multiple Short Names</li>
					<li>One Short Name cannot have more than one URL</li>
					<li>Short Name is the unique name that will be used to reference a URL</li>
				</ol>
			</div>
		</div>
	);
}
