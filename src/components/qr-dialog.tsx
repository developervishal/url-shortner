"use client";
import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "./ui/button";

const QRDialog = ({
  open,
  onOpenChange,
  value,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const handleImageDownload = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
        </DialogHeader>
        <div ref={qrRef} className="flex items-center justify-center py-4">
          <QRCodeSVG value={value} size={240} />
        </div>
        <DialogFooter>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleImageDownload}
          >
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QRDialog;
