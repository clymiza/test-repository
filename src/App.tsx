import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Datetime } from "@/components/datetime";
import { Input } from "@/components/input";
import { InputLabel } from "@/components/inputLabel";
import { QRCode } from "@/components/qrcode";
import { Textarea } from "@/components/textarea";
import { Card } from "@/layout/card";
import { Datetime as DatetimeLayout } from "@/layout/datetime";
import { Field } from "@/layout/field";
import { type FormSchemaType, formSchema } from "@/utils/formSchema";
import { generateQrCodeUrl } from "@/utils/generateQrCodeUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

function App() {
	const today = new Date();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormSchemaType>({
		defaultValues: {
			startDate: today.toString(),
			startTime: `${today.getHours().toString()}:00`,
			endDate: today.toString(),
			endTime: `${(today.getHours() + 1).toString()}:00`,
		},
		resolver: zodResolver(formSchema),
		mode: "onSubmit",
	});

	const [qrCode, setQrData] = React.useState<string | null>(null);

	const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
		const url = await generateQrCodeUrl(data);
		setQrData(url);
	};

	const allDay = watch("allDay");
	const endDate = watch("endDate");
	const endTime = watch("endTime");
	const startDate = watch("startDate");
	const startTime = watch("startTime");

	return (
		<main className="flex p-2 md:py-10 gap-2 md:gap-10 max-w-full flex-col items-center bg-brand mx-auto">
			<Card>
				<form className="contents" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-center h-8 w-full text-2xl font-bold">
						予定作成QRコードの生成
					</h1>
					<Field>
						<InputLabel required>予定タイトル</InputLabel>
						<Input
							errorMessage={errors.title?.message}
							{...register("title")}
							placeholder="TimeTree Day"
						/>
					</Field>
					<div className="flex flex-col gap-3 justify-center items-start self-stretch shrink-0 flex-nowrap">
						<div className="flex flex-wrap gap-4 items-center self-stretch shrink-0">
							<Field>
								<InputLabel required>開始日時</InputLabel>
								<DatetimeLayout>
									<Datetime
										{...register("startDate")}
										type="date"
										formatText={format(
											new Date(startDate),
											"yyyy年MM月dd日 EEE",
											{ locale: ja },
										)}
									/>
									{!allDay && (
										<Datetime
											{...register("startTime")}
											type="time"
											formatText={startTime}
										/>
									)}
								</DatetimeLayout>
							</Field>
							<Field>
								<InputLabel required>終了日時</InputLabel>
								<DatetimeLayout>
									<Datetime
										{...register("endDate")}
										type="date"
										formatText={format(
											new Date(endDate),
											"yyyy年MM月dd日 EEE",
											{ locale: ja },
										)}
										errorMessage={errors.endDate?.message}
									/>
									{!allDay && (
										<Datetime
											{...register("endTime")}
											type="time"
											formatText={endTime}
											errorMessage={errors.endDate?.message}
										/>
									)}
								</DatetimeLayout>
							</Field>
						</div>
						<Checkbox {...register("allDay")} label="終日" />
					</div>
					<Field>
						<InputLabel>メモ</InputLabel>
						<Textarea
							{...register("memo")}
							placeholder="本イベントは「普段からTimeTreeを愛用くださっているみなさまに、サービスやわたしたちのことをいろいろ知っていただき、TimeTreeをもっと好きになってもらいたい！」という思いで企画しています。"
						/>
					</Field>
					<Field>
						<InputLabel>場所</InputLabel>
						<Input
							{...register("location")}
							placeholder="東京都新宿区西新宿6-6-3 新宿国際ビルディング新館503"
						/>
					</Field>
					<Field>
						<InputLabel>添付URL</InputLabel>
						<Input
							{...register("url")}
							placeholder="https://timetreeapp.com/"
						/>
					</Field>
					<div className="flex flex-col items-end self-stretch shrink-0">
						<Button type="submit">QRコード生成</Button>
					</div>
				</form>
			</Card>
			{qrCode && (
				<Card>
					<div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap">
						<span className="h-5 shrink-0 basis-auto text-base font-bold text-black text-left whitespace-nowrap">
							生成結果
						</span>
					</div>
					<div className="flex max-w-[50%] aspect-square shrink-0 bg-cover bg-no-repeat">
						<QRCode className="flex-auto max-w-full max-h-full" url={qrCode} />
					</div>
				</Card>
			)}
		</main>
	);
}

export default App;
