import { Button } from "@smolurl/components/ui/Button";
import Input from "@smolurl/components/ui/Input";
import APIHandler from "@smolurl/handlers/APIHandler";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GoSmolURL() {
	const { redirectUrl } = useParams();
	const [shortName, setShortName] = useState("");
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
	const baseUrl = window.location.href.split("/")[2];
	useEffect(() => {
		if (isFetchedShortUrlCheckSuccess) {
			try {
				setShortResponse({ valid: true, data: `You are being redirecting to \`${redirectData.url}\`` });
				new URL(redirectData.url);
				window.location.href = redirectData.url;
			} catch (e) {
				setShortResponse({ valid: false, data: `There was a error while redirecting to \`${redirectData.url}\`` });
			}
		}
		if (isFetchedLogStatsError) {
			setShortResponse({
				valid: false,
				data: (redirectDataError as AxiosError<{ error: string }>)?.response?.data.error ?? "Error",
			});
		}
	}, [redirectData, isFetchedShortUrlCheckSuccess, redirectDataError, isFetchedLogStatsError]);

	return (
		<div
			className="main p-5 flex flex-col items-center justify-center gap-5 min-h-[theme(spacing.fit-screen)]"
			id="main"
		>
			{!!shortResponse.data.length && (
				<p className={`border ${shortResponse.valid ? "border-green-500" : "border-red-500"} p-5 w-full`}>
					{shortResponse.data}
				</p>
			)}
			<form
				className="flex flex-col justify-center items-center gap-5 w-2/3"
				onSubmit={(e) => {
					e.preventDefault();
					window.location.href = `/${shortName}`;
				}}
			>
				<div className="flex flex-col gap-2 w-full">
					<label className="text-xl font-bold">Short Name</label>
					<Input
						className="w-full"
						required
						type="text"
						value={shortName ?? ""}
						onChange={(e) => {
							setShortName(e.target.value);
						}}
						placeholder={"Short Name"}
					/>
					<Button>Go</Button>
				</div>
			</form>
			<div className="border-2 border-border p-5 text-2xl w-full text-justify">
				<p className="text-2xl underline text-center mb-2">Notes</p>
				<ol className="list-decimal pl-5">
					<li>{`Add '/YourShortName' to this URL ( ${baseUrl} ) to go to your existing ShortURL entry`}</li>
					<li>
						Go to
						<a href="/create" className="text-primary underline underline-offset-4 mx-2">
							/create
						</a>
						to create a new smolURL entry
					</li>
				</ol>
			</div>
		</div>
	);
}
