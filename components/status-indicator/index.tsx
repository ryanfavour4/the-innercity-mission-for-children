export default function StatusIndicator({
  statusIndicator,
  className,
  ...rest
}: {
  statusIndicator: string | boolean
  className?: string
}) {
  const status = String(statusIndicator).toLowerCase()

  // Define status colors for different shipment-related statuses
  const statusColors: Record<string, string> = {
    default: 'border-gray-500/50 bg-gray-500/10 text-gray-500',
    claimed: 'border-primary-500/50 bg-primary-500/10 text-primary-500',
    false: 'border-red-500/50 bg-red-500/10 text-red-500',
    failed: 'border-red-500/50 bg-red-500/10 text-red-500',
    true: 'border-green-500/50 bg-green-500/10 text-green-500',
    unclaimed: 'border-red-500/50 bg-red-500/10 text-red-500',
    approved: 'border-green-500/50 bg-green-500/10 text-green-500',
    active: 'border-green-500/50 bg-green-500/10 text-green-500',
    pending: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500',
    'almost there': 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500',
    declined: 'border-red-500/50 bg-red-500/10 text-red-500',
    inactive: 'border-red-500/50 bg-red-500/10 text-red-500',

    // 🚀 Added shipment-specific statuses
    'in transit': 'border-blue-500/50 bg-blue-500/10 text-blue-500',
    arrived: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-500',
    excellent: 'border-green-600/50 bg-green-600/10 text-green-600',
    done: 'border-green-600/50 bg-green-600/10 text-green-600',
    delivered: 'border-green-600/50 bg-green-600/10 text-green-600',
    returned: 'border-purple-500/50 bg-purple-500/10 text-purple-500',
    canceled: 'border-red-700/50 bg-red-700/10 text-red-700',
    cancelled: 'border-red-700/50 bg-red-700/10 text-red-700',
    rejected: 'border-red-700/50 bg-red-700/10 text-red-700',
    'awaiting pickup': 'border-orange-500/50 bg-orange-500/10 text-orange-500',
    average: 'border-orange-500/50 bg-orange-500/10 text-orange-500',
    'customs hold': 'border-red-600/50 bg-red-600/10 text-red-600',
    'nowhere near': 'border-red-600/50 bg-red-600/10 text-red-600',
    'out for delivery': 'border-teal-500/50 bg-teal-500/10 text-teal-500',
  }

  return (
    <button
      className={`rounded-full border px-4 py-1 text-xs capitalize ${className} ${statusColors[status] || 'bg-gray-500/10 border-gray-500/50 text-gray-500'}`}
      {...rest}
    >
      <span className="mr-2 animate-pulse text-xs">●</span>
      {status}
    </button>
  )
}
