import Image from "next/image";

type Props = {
  terms: boolean;
};

export default function DesktopFooter(props: Props): JSX.Element {
  const { terms } = props;
  return (
    <div className="mt-[63px] md:flex items-center hidden">
      <button
        className="w-auto p-7 mb-0 bg-light-yellow rounded-4xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed"
        type="submit"
        id="desktop-submit-button"
        disabled={!terms}
        aria-disabled={!terms}
        title={terms ? "" : "Please accept the Terms and Privacy Policy"}
      >
        <Image
          className="mr-2.5"
          src="/images/lock_icon.svg"
          width={10}
          height={10}
          alt="lock icon"
          priority
        />
        Save!
      </button>

      <button
        className="w-auto ml-5 p-7 rounded-4xl border border-dark-grey"
        type="button"
      >
        Got a VerifyMyAge account? Sign in
      </button>
    </div>
  );
}
