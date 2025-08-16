const SpiralBinding = ({ className = '' }) => (
  <div className={`absolute left-0 top-0 w-8 h-full ${className}`}>
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute w-6 h-4 border-2 border-gray-500 rounded-full"
        style={{
          right: '20px',
          top: `${i * 5 + 2}%`,
          borderStyle: 'solid',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          transform: 'rotate(0deg)',
          background:
            'linear-gradient(90deg, transparent 30%, #666 30%, #666 70%, transparent 70%)',
        }}
      />
    ))}
  </div>
);

export default SpiralBinding;