import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
}

export default layout;
