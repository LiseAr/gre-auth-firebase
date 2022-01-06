
const Select = () => {
  return (
    <div className="relative inline-block w-full text-gray-700">
      <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Selecione um cliente">
        <option>A regular sized select input</option>
        <option>Another option</option>
        <option>And one more</option>
      </select>
    </div>
  )
}

export { Select }