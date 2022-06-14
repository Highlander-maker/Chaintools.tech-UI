import Link from "next/link"

function EducationPage() {
  return (
    <div className="flex flex-wrap items-center justify-around md:max-w-4xl mt-6 sm:w-full">
      <button className="p-6 mt-6 text-left border border-secondary hover:border-primary w-96 rounded-xl hover:text-primary focus:text-primary-focus">
        <h3 className="text-2xl font-bold">Writen guides &rarr;</h3>
        <p className="mt-4 text-xl">
          Take a read through some of our validator educational tutorials
        </p>
      </button>
    </div>

  );
}

export default EducationPage
