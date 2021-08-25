const Navbar = () => {
  return (
    <nav id="mainNav" className="bg-darkPurple text-white">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          <li className="active">TOURNAMENTS</li>
          <li className="py-5 px-8">NFT MARKET</li>
          <li className="py-5 px-8">MERCH STORE</li>
          <li className="py-5 px-8">LEAGUE TABLES</li>
          <li className="py-5 px-8">PLAYER STATS</li>
          <li className="py-5 px-8">LOGOUT</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
