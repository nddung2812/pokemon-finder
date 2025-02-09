import Link from "next/link";


interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name } : PokemonCardProps) {
  return (
    <Link
      href={name}
      className="ground border border-transparent rounded-lg m-3 px-5 py-4 transition-colors dark:border-gray-800 dark:hover:border-gray-700 hover:ba-gray-200"
      key={name+ "card"}
    >
        <h2 className="text-2xl font-semibold ">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    </Link>
  );
}