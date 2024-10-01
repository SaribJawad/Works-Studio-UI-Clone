import LayoutContainer from "../components/LayoutContainer";

function ThirdPage() {
  return (
    <div className="h-auto w-full bg-white" data-scroll-container>
      <LayoutContainer />
      <footer className="h-[80px] w-full text-white  bg-black flex justify-between items-center gap-3 uppercase text-sm font-semibold px-10">
        <h3>Hello@works.studio</h3>
        <div className="flex gap-6 items-center">
          <h3>Newsletter</h3>
          <h3>Instagram</h3>
        </div>
      </footer>
    </div>
  );
}

export default ThirdPage;
