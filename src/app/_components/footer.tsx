import Container from "@/app/_components/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="text-center text-sm text-neutral-400 dark:text-neutral-300">
            © {currentYear} ni18 Blog. All rights reserved. 
            Content & resources protected under 
            <a 
              href="https://blog.ni18.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-neutral-400 transition-colors"
            >
              ni18.in
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}