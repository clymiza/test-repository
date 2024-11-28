import { QRCodeCanvas } from "qrcode.react";

export type QRCodeProps = {
	url: string;
	className?: string;
};

export const QRCode = ({ url, className }: QRCodeProps) => {
	return (
		<QRCodeCanvas
			className={className}
			value={url}
			size={512}
			fgColor="#2ecc87"
		/>
	);
};
