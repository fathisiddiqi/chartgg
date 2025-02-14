import Image from "next/image";

interface AuthorProps {
  name: string;
  role: string;
  avatar: string;
}

export function Author({ name, role, avatar }: AuthorProps) {
  return (
    <div className="flex items-center gap-4 not-prose my-8">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}
