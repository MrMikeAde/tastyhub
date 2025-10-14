export default function MenuItemSkeleton() {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative h-48 bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-2/3" />
        <div className="flex items-center justify-between">
          <div className="h-8 bg-muted rounded w-24" />
          <div className="h-8 bg-muted rounded-full w-24" />
        </div>
        <div className="h-10 bg-muted rounded w-full" />
      </div>
    </div>
  )
}
