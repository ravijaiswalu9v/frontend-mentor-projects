import React from 'react'

const Nutrition = () => {
  return (
    <>
    <div className='border-1 mt-8 border-Stone-150'></div>
     <h2 className="text-2xl font-bold mt-4 mb-4 font-[Outfit] text-Brown-800">
        Nutrition
      </h2>
      <p className='text-base font-normal mb-2 text-stone-700'>The table below shows nutrition values per serving without the additional fillings.</p>
      <table className='w-full text-left'>
        <tbody>
          <tr className='border-b border-Stone-100'>
            <td className='px-4 py-2 text-stone-500'>Calories</td>
            <td className='px-4 py-2 font-bold text-Brown-800'>277kcal</td>
          </tr>
          <tr className='border-b border-Stone-100'>
            <td className='px-4 py-2 text-stone-500'>Carbs</td>
            <td className='px-4 py-2 font-bold text-Brown-800'>0g</td>
          </tr>
          <tr className='border-b border-Stone-100'>
            <td className='px-4 py-2 text-stone-500'>Protein</td>
            <td className='px-4 py-2 font-bold text-Brown-800'>20g</td>
          </tr>
          <tr>
            <td className='px-4 py-2 text-stone-500'>Fat</td>
            <td className='px-4 py-2 font-bold text-Brown-800'>22g</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Nutrition