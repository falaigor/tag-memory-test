export function Footer() {
  return (
    <div data-testid="footer" className="relative py-4 mb-16">
      <footer className="flex items-center justify-center">
        <h2 className="text-sm py-2">
          HTML Tags Memory Test by{" "}
          <a
            data-testid="github-url"
            className="underline underline-offset-2"
            target="_blank"
            href="https://github.com/falaigor"
          >
            @falaigors
          </a>
        </h2>
      </footer>
    </div>
  );
}
