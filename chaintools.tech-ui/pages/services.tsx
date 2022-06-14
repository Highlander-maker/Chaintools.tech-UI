function ServicesPage() {
  return (
    <div className="flex flex-wrap items-center justify-around md:max-w-4xl mt-6 sm:w-full">
      <button className="p-6 mt-6 text-left border border-secondary hover:border-primary w-96 rounded-xl hover:text-primary focus:text-primary-focus">
        <h3 className="text-2xl font-bold">Income calculator &rarr;</h3>
        <p className="mt-4 text-xl">
          Input your validator address to monitor commission
        </p>
      </button>
    </div>
  )
}

export default ServicesPage
