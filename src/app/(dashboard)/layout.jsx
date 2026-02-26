import RequireAuth from "../lib/RequireAuth";

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Management Consulting and Software Development Firm",
};

export default function RootLayout({ children }) {
  return (
    <>
      <RequireAuth>{children}</RequireAuth>
    </>
  );
}
