import type { FormSchemaType } from "@/utils/formSchema";
import { formatDatetime } from "@/utils/formatDatetime";
import { format } from "date-fns";

/**
 * QRコード生成用のURLを生成する
 * @param data QRコードに埋め込むデータ
 * @returns QRコード生成用のURL
 */
export const generateQrCodeUrl = async (
	data: FormSchemaType,
): Promise<string> => {
	const { startDatetime, endDatetime } = formatDatetime({
		startDate: data.startDate,
		startTime: data.startTime,
		endDate: data.endDate,
		endTime: data.endTime,
		allDay: data.allDay,
	});

	// 1. データをQRコード用に整形
	const qrData = {
		c: 1,
		t: data.title,
		n: data.memo,
		s: format(startDatetime, "yyyyMMdd'T'HHmmssxx"),
		e: format(endDatetime, "yyyyMMdd'T'HHmmssxx"),
		a: data.allDay ? 1 : 0,
		l: data.location,
		u: data.url,
	};

	// 2. qrDataをJSON文字列に変換する(`B`)
	const qrDataJson = JSON.stringify(qrData);

	// 3. `B`をgzipで圧縮する(`C`)
	const arrayBuffer = await compress(qrDataJson);

	// 4. `C`のバイナリデータをBase64エンコードする(`D`)
	const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
	const url = `https://timetr.ee/ne/${base64}`;

	return url;
};

async function compress(str: string): Promise<ArrayBuffer> {
	const encoder = new TextEncoder();
	const cs = new CompressionStream("gzip");
	const buf = encoder.encode(str);
	const stream = new Response(buf).body?.pipeThrough(cs);

	return new Response(stream).arrayBuffer();
}
