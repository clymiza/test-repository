export type DateTimeRange = {
	startDate: string;
	startTime: string;
	endDate: string;
	endTime: string;
	allDay?: boolean;
};

/**
 * 時刻をフォーマットする
 * @param startDate 開始日
 * @param startTime 開始時刻
 * @param endDate 終了日
 * @param endTime 終了時刻
 * @param allDay 終日フラグ
 *
 * @returns 開始日時と終了日時
 */
export function formatDatetime({
	startDate,
	startTime,
	endDate,
	endTime,
	allDay,
}: DateTimeRange): { startDatetime: Date; endDatetime: Date } {
	const startDatetime = new Date(startDate);
	const endDatetime = new Date(endDate);
	// 終日の時は、時刻を00:00にする
	if (allDay) {
		startDatetime.setHours(0, 0, 0, 0);
		endDatetime.setHours(0, 0, 0, 0);
	} else {
		startDatetime.setHours(
			Number(startTime.split(":")[0]),
			Number(startTime.split(":")[1]),
			0,
			0,
		);
		endDatetime.setHours(
			Number(endTime.split(":")[0]),
			Number(endTime.split(":")[1]),
			0,
			0,
		);
	}

	return { startDatetime, endDatetime };
}
