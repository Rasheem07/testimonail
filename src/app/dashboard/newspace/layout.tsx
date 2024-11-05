
import FormContextProvider from "@/contexts/formContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dashboard min-h-screen w-full py-8 flex justify-center items-center px-4 md:px-0">
      <FormContextProvider>{children}</FormContextProvider>
    </div>
  );
}
