import maamulProLogo from "../images/MaamulPro.png";
import siivGroupLogo from "../images/siiv-group.png";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <img src={maamulProLogo} alt="MaamulPro" className="h-6 w-auto" />
          <span className="font-display font-semibold text-foreground">
            Maamul<span className="text-blue">Pro</span>
          </span>
        </div>
        <p>© {new Date().getFullYear()} MaamulPro. All rights reserved.</p>
        <p>
          Powered by{" "}
          <img src={siivGroupLogo} alt="Siiv Group" className="inline h-5 w-auto align-middle" />
          <span className="text-foreground"> Siiv Group</span>
        </p>
      </div>
    </footer>
  );
}
