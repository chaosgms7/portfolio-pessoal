/**
 * Junta nomes de classe ignorando valores vazios.
 * Substitui o `cn` do shadcn/ui (clsx + tailwind-merge), que depende do Tailwind — não usado neste projeto.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ")
}
