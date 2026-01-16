export type CommandOutput = {
  type: "text" | "error" | "success" | "ascii" | "link";
  content: string;
};

export type CommandResult = {
  output: CommandOutput[];
  shouldClose?: boolean;
  shouldClear?: boolean;
  navigateTo?: string;
};

export type Command = {
  name: string;
  aliases?: string[];
  description: string;
  execute: (args: string[]) => CommandResult;
};

const FILESYSTEM: Record<string, string[]> = {
  "~": ["projects", "about.txt", "skills.json", "contact.md"],
  "~/projects": ["portfolio", "blog", "terminal-easter-egg"],
};

let currentDir = "~";

const asciiArt = {
  neofetch: `
       _,met$$$$$gg.           danijel@portfolio
    ,g$$$$$$$$$$$$$$$P.        ------------------
  ,g$$P"     """Y$$.".         OS: macOS Monterey
 ,$$P'              \`$$$.      Host: danijelmitrovic.com
',$$P       ,ggs.     \`$$b:    Kernel: Next.js 16
\`d$$'     ,$P"'   .    $$$     Uptime: Since 2018
 $$P      d$'     ,    $$P     Packages: Java, Spring, Cloud
 $$:      $$.   -    ,d$$'     Shell: zsh
 $$;      Y$b._   _,d$P'       Terminal: retro-terminal v1.0
 Y$$.    \`.\`"Y$$$$P"'          CPU: Coffee-powered
 \`$$b      "-.__               Memory: Full of code
  \`Y$$
   \`Y$$.
     \`$$b.
       \`Y$$b.
          \`"Y$b._
              \`"""
`,
  coffee: `
        ( (
         ) )
      ........
      |      |]
      \\      /
       \`----'

  Here's your virtual coffee!
  Now get back to coding...
`,
  matrix: `
  Wake up, Neo...
  The Matrix has you...
  Follow the white rabbit.

  Knock, knock, Neo.
`,
};

export const commands: Command[] = [
  {
    name: "help",
    description: "List all available commands",
    execute: () => ({
      output: [
        { type: "text", content: "Available commands:" },
        { type: "text", content: "" },
        { type: "success", content: "  help           - Show this help message" },
        { type: "success", content: "  whoami         - Learn about Danijel" },
        { type: "success", content: "  skills / tech  - View tech stack" },
        { type: "success", content: "  experience     - Work history" },
        { type: "success", content: "  contact        - Get in touch" },
        { type: "text", content: "" },
        { type: "text", content: "Navigation:" },
        { type: "success", content: "  home           - Go to homepage" },
        { type: "success", content: "  blog           - Go to blog" },
        { type: "success", content: "  portfolio      - Go to portfolio" },
        { type: "text", content: "" },
        { type: "text", content: "Terminal:" },
        { type: "success", content: "  clear          - Clear the terminal" },
        { type: "success", content: "  exit / quit    - Close terminal" },
        { type: "text", content: "" },
        { type: "text", content: "Fun:" },
        { type: "success", content: "  ls / cd / pwd  - Filesystem simulation" },
        { type: "success", content: "  neofetch       - System info" },
        { type: "success", content: "  coffee         - Get some coffee" },
        { type: "success", content: "  matrix         - Take the red pill" },
      ],
    }),
  },
  {
    name: "whoami",
    description: "Information about Danijel",
    execute: () => ({
      output: [
        { type: "text", content: "" },
        { type: "success", content: "  Danijel Mitrovic" },
        { type: "text", content: "  Backend-specialized Software Engineer" },
        { type: "text", content: "  Based in Serbia" },
        { type: "text", content: "" },
        { type: "text", content: "  I build robust, scalable backend systems" },
        { type: "text", content: "  with a focus on clean architecture and" },
        { type: "text", content: "  developer experience." },
        { type: "text", content: "" },
        { type: "text", content: "  Type 'skills' to see my tech stack," },
        { type: "text", content: "  or 'contact' to get in touch." },
        { type: "text", content: "" },
      ],
    }),
  },
  {
    name: "skills",
    aliases: ["tech"],
    description: "View tech stack",
    execute: () => ({
      output: [
        { type: "text", content: "" },
        { type: "success", content: "  Languages:" },
        { type: "text", content: "    Java, TypeScript, SQL" },
        { type: "text", content: "" },
        { type: "success", content: "  Backend:" },
        { type: "text", content: "    Spring Boot, Spring Cloud, Hibernate" },
        { type: "text", content: "" },
        { type: "success", content: "  Databases:" },
        { type: "text", content: "    PostgreSQL, MongoDB, Redis" },
        { type: "text", content: "" },
        { type: "success", content: "  Cloud & DevOps:" },
        { type: "text", content: "    AWS, Docker, Kubernetes, CI/CD" },
        { type: "text", content: "" },
        { type: "success", content: "  Frontend:" },
        { type: "text", content: "    React, Next.js, TailwindCSS" },
        { type: "text", content: "" },
      ],
    }),
  },
  {
    name: "experience",
    aliases: ["work"],
    description: "Work history",
    execute: () => ({
      output: [
        { type: "text", content: "" },
        { type: "success", content: "  Work Experience" },
        { type: "text", content: "" },
        { type: "text", content: "  Backend Engineer with 6+ years of experience" },
        { type: "text", content: "  building scalable distributed systems." },
        { type: "text", content: "" },
        { type: "text", content: "  Specialized in:" },
        { type: "text", content: "  - Microservices architecture" },
        { type: "text", content: "  - API design and development" },
        { type: "text", content: "  - Database optimization" },
        { type: "text", content: "  - Cloud infrastructure" },
        { type: "text", content: "" },
        { type: "text", content: "  Visit /portfolio for detailed projects." },
        { type: "text", content: "" },
      ],
    }),
  },
  {
    name: "contact",
    description: "Contact information",
    execute: () => ({
      output: [
        { type: "text", content: "" },
        { type: "success", content: "  Get in Touch" },
        { type: "text", content: "" },
        { type: "link", content: "  GitHub:    github.com/rodjenihm" },
        { type: "link", content: "  LinkedIn:  linkedin.com/in/danijel-mitrovic" },
        { type: "link", content: "  Twitter:   x.com/dan_mitrovic_91" },
        { type: "text", content: "" },
      ],
    }),
  },
  {
    name: "home",
    description: "Navigate to homepage",
    execute: () => ({
      output: [{ type: "success", content: "Navigating to homepage..." }],
      navigateTo: "/",
      shouldClose: true,
    }),
  },
  {
    name: "blog",
    description: "Navigate to blog",
    execute: () => ({
      output: [{ type: "success", content: "Navigating to blog..." }],
      navigateTo: "/blog",
      shouldClose: true,
    }),
  },
  {
    name: "portfolio",
    description: "Navigate to portfolio",
    execute: () => ({
      output: [{ type: "success", content: "Navigating to portfolio..." }],
      navigateTo: "/portfolio",
      shouldClose: true,
    }),
  },
  {
    name: "clear",
    description: "Clear the terminal",
    execute: () => ({
      output: [],
      shouldClear: true,
    }),
  },
  {
    name: "exit",
    aliases: ["quit"],
    description: "Close the terminal",
    execute: () => ({
      output: [{ type: "text", content: "Goodbye! Press Ctrl+` to reopen." }],
      shouldClose: true,
    }),
  },
  {
    name: "ls",
    description: "List directory contents",
    execute: (args) => {
      const dir = args[0] || currentDir;
      const contents = FILESYSTEM[dir];
      if (!contents) {
        return {
          output: [{ type: "error", content: `ls: ${dir}: No such file or directory` }],
        };
      }
      return {
        output: contents.map((item) => ({
          type: "text" as const,
          content: `  ${item}`,
        })),
      };
    },
  },
  {
    name: "cd",
    description: "Change directory",
    execute: (args) => {
      if (!args[0] || args[0] === "~") {
        currentDir = "~";
        return { output: [] };
      }
      if (args[0] === "..") {
        currentDir = "~";
        return { output: [] };
      }
      const newDir = args[0].startsWith("~") ? args[0] : `${currentDir}/${args[0]}`;
      if (FILESYSTEM[newDir]) {
        currentDir = newDir;
        return { output: [] };
      }
      return {
        output: [{ type: "error", content: `cd: ${args[0]}: No such file or directory` }],
      };
    },
  },
  {
    name: "pwd",
    description: "Print working directory",
    execute: () => ({
      output: [{ type: "text", content: currentDir }],
    }),
  },
  {
    name: "cat",
    description: "Display file contents",
    execute: (args) => {
      if (!args[0]) {
        return { output: [{ type: "error", content: "cat: missing file operand" }] };
      }
      const fileContents: Record<string, string> = {
        "about.txt": "Hi! I'm Danijel, a backend engineer who loves building things.\nType 'whoami' for more info.",
        "skills.json": '{\n  "languages": ["Java", "TypeScript"],\n  "databases": ["PostgreSQL", "MongoDB", "Redis"]\n}',
        "contact.md": "# Contact\n- GitHub: rodjenihm\n- Twitter: @dan_mitrovic_91",
      };
      const content = fileContents[args[0]];
      if (!content) {
        return { output: [{ type: "error", content: `cat: ${args[0]}: No such file or directory` }] };
      }
      return {
        output: content.split("\n").map((line) => ({ type: "text" as const, content: line })),
      };
    },
  },
  {
    name: "sudo",
    description: "Execute as superuser",
    execute: () => ({
      output: [
        { type: "error", content: "Nice try! But you're not root here." },
        { type: "text", content: "This incident will be reported... just kidding." },
      ],
    }),
  },
  {
    name: "rm",
    description: "Remove files",
    execute: (args) => {
      if (args.join(" ").includes("-rf /")) {
        return {
          output: [
            { type: "error", content: "rm: it is dangerous to operate recursively on '/'" },
            { type: "text", content: "rm: use --no-preserve-root to override this failsafe" },
            { type: "text", content: "" },
            { type: "success", content: "Just kidding, this is a website. Nice try though!" },
          ],
        };
      }
      return {
        output: [{ type: "error", content: "rm: permission denied (read-only filesystem)" }],
      };
    },
  },
  {
    name: "neofetch",
    description: "System information",
    execute: () => ({
      output: [{ type: "ascii", content: asciiArt.neofetch }],
    }),
  },
  {
    name: "coffee",
    description: "Get some coffee",
    execute: () => ({
      output: [{ type: "ascii", content: asciiArt.coffee }],
    }),
  },
  {
    name: "vim",
    description: "Open vim editor",
    execute: () => ({
      output: [
        { type: "text", content: "Opening vim..." },
        { type: "text", content: "" },
        { type: "error", content: "Error: vim not found" },
        { type: "text", content: "Just kidding. But seriously, how would you exit?" },
        { type: "text", content: "(Hint: It's :q! or :wq)" },
      ],
    }),
  },
  {
    name: "matrix",
    description: "Enter the matrix",
    execute: () => ({
      output: [{ type: "ascii", content: asciiArt.matrix }],
    }),
  },
];

export function findCommand(input: string): Command | undefined {
  const commandName = input.toLowerCase().trim();
  return commands.find(
    (cmd) => cmd.name === commandName || cmd.aliases?.includes(commandName)
  );
}

export function executeCommand(input: string): CommandResult {
  const parts = input.trim().split(/\s+/);
  const commandName = parts[0]?.toLowerCase();
  const args = parts.slice(1);

  if (!commandName) {
    return { output: [] };
  }

  const command = findCommand(commandName);
  if (!command) {
    return {
      output: [
        { type: "error", content: `Command not found: ${commandName}` },
        { type: "text", content: "Type 'help' for available commands." },
      ],
    };
  }

  return command.execute(args);
}
