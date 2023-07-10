import Image from "next/image";

type Props = {
  terms: boolean;
};

export default function MobileFooter(props: Props): JSX.Element {
  const { terms } = props;
  return (
    <div className="md:hidden grid-cols-1 absolute bottom-0 left-0 w-full px-6 pb-5 bg-white">
      <hr className="border-foggy-grey mb-5" />
      <button
        className="w-full p-3.5 mb-5 bg-light-yellow rounded-4xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed"
        type="submit"
        id="mobile-submit-button"
        disabled={!terms}
        title={terms ? "" : "Please accept the Terms and Privacy Policy"}
      >
        <Image
          className="mr-2.5"
          src="/lock_icon.svg"
          width={10}
          height={10}
          alt="lock icon"
          priority
        />
        Save
      </button>

      <button
        className="w-full p-3.5 rounded-4xl border border-dark-grey"
        type="button"
      >
        Got a VerifyMyAge account? Sign in
      </button>
    </div>
  );
}
