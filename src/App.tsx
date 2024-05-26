import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import RayQLSyntaxHighlighter from './lib/syntax-highlighter';

const EXAMPLE_SCHEMA = `# Enum for user types

enum user_type {
    admin
    developer
    normal
}

# Model declaration for 'user'

model user {
    id: int primary_key auto_increment,
    username: str unique,
    email: str unique, # this is an inline comment
    phone_number: str?,
    user_type: user_type default(user_type.normal)
}

# Model declaration for 'post'

model post {
    id: int primary_key auto_increment,
    title: str default('New Post'),
    content: str,
    author_id: int foreign_key(user.id),
    created_at: timestamp default(now()),
}`;

const highlightedSchema = RayQLSyntaxHighlighter.highlight(EXAMPLE_SCHEMA);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">RayQL</h1>
        <p className="text-xl text-gray-600">
          A schema and query language for SQLite
        </p>
      </header>
      
      <main className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet RayQL</h2>
            <h3 className="text-2xl text-gray-700 mb-4">The schema and query language for your next side-project</h3>
            <p className="text-lg text-gray-600 mb-6">
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>Features:</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Written in Rust</li>
                <li>Clean and familiar syntax</li>
                <li>Online editor</li>
                <li>VS Code extension for syntax highlighting</li>
              </ul>
            </p>
            <a 
              href="https://harshdoesdev.github.io/rayql-studio"
              className="inline-block px-8 py-4 bg-primary text-black text-lg font-medium rounded-lg"
            >
              Try it out
            </a>
          </div>
          <div className="flex-1 lg:ml-8 mb-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Example</h2>
            <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: highlightedSchema }}></code>
            </pre>
          </div>
        </div>
      </main>
      
      <footer className="mt-16 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://discord.gg/4re5ShTshg" className="text-gray-600 hover:text-gray-800 transition">
            <IconBrandDiscord size={32} />
          </a>
          <a href="https://github.com/harshdoesdev/rayql" className="text-gray-600 hover:text-gray-800 transition">
            <IconBrandGithub size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
