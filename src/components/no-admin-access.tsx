interface NoAdminAccessProps extends React.HTMLAttributes<HTMLDivElement> {
  route?: string
}

export function NoAdminAccess({ route, ...props }: NoAdminAccessProps) {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-6">
      <h2 className="text-md rounded-lg bg-secondary p-4 lg:text-xl 2xl:text-2xl">
        You do not have permission to access this page!
      </h2>
      <code>{route}</code>
    </div>
  )
}
