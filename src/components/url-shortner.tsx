"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, QrCode } from "lucide-react";
import { toast } from "sonner";
import QRDialog from "./qr-dialog";

export default function URLShortener() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openQRDialog, setOpenQRDialog] = useState(false);

  const handleShorten = async () => {
    if (!url) return;

    setIsLoading(true);
    const response = await fetch("/api/url-shortner", {
      method: "POST",
      body: JSON.stringify({ url: url }),
    });
    const result = await response.json();
    if (result.success && result.data) {
      const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${result.data.shortUrl}`;
      setUrl("");
      setShortenedUrl(shortUrl);
    } else {
      toast.error(result.message);
    }
    setUrl("");
    setIsLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    toast.success("Copied to clipboard");
  };
  return (
    <div className="mx-auto px-4 py-8">
      <QRDialog open={openQRDialog} onOpenChange={setOpenQRDialog} value={shortenedUrl}/>
      <Card className="max-w-4xl mx-auto mb-12 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Shorten Your URL</CardTitle>
          <CardDescription>
            Paste your long URL below and get a shortened version instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="https://example.com/very-long-url-that-you-want-to-shorten"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <Button
              onClick={handleShorten}
              disabled={!url || isLoading}
              className="h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isLoading ? "Shortening..." : "Shorten"}
            </Button>
          </div>

          {shortenedUrl && (
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between flex-wrap gap-y-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">
                    Your shortened URL:
                  </p>
                  <p className="text-lg font-mono text-green-700">
                    {shortenedUrl}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                    onClick={() => {
                      setOpenQRDialog(true);
                    }}
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    QR Code
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dashboard Tabs */}
    </div>
  );
}
