export default function Badge({ children }: { children: React.ReactNode }){
  return <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-brand-700/20 border border-brand-700/10">{children}</span>
}
