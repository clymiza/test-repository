import { formatDatetime } from "@/utils/formatDatetime";
import { z } from "zod";

export const formSchema = z
	.object({
		title: z.string().min(1, { message: "必須項目です" }),
		startDate: z.string().min(1),
		startTime: z.string().min(1),
		endDate: z.string().min(1),
		endTime: z.string().min(1),
		allDay: z.boolean().optional(),
		memo: z
			.string()
			.max(2000, { message: "2000文字以内で入力してください" })
			.optional(),
		location: z
			.string()
			.max(100, { message: "100文字以内で入力してください" })
			.optional(),
		url: z
			.string()
			.url({ message: "URLを入力してください" })
			.max(2048, { message: "2048文字以内で入力してください" })
			.optional(),
	})
	.superRefine((arg, ctx) => {
		if (arg) {
			const { startDatetime, endDatetime } = formatDatetime({
				startDate: arg.startDate,
				startTime: arg.startTime,
				endDate: arg.endDate,
				endTime: arg.endTime,
				allDay: arg.allDay,
			});
			if (startDatetime > endDatetime) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "終了日時が開始日時を超えています",
					path: ["endDate"],
				});
			}
		}
	});

export type FormSchemaType = z.infer<typeof formSchema>;
