import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBarLateral from "@/components/HomeSideNav";
import { Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAER Releases",
  description: "Relatórios de lançamentos de CAER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Grid>
          <Grid item xs={12} md={4}>
            <AppBarLateral />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ flexGrow: 1, marginLeft: { md: "400px" } }}
          >
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
