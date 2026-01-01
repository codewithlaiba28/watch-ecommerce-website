import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState<string>("Home")
    console.log(menu)
  return (
    <div>
        <ul><Link onClick={()=>{setMenu("Home")}} to='/'>Home</Link></ul>
        <ul><Link to='/internationalbrands'>40+ Internationalbrands</Link></ul>
        <ul><Link to='/allwatches'>All watches</Link></ul>
        <ul><Link to='/men'>Men</Link></ul>
        <ul><Link to='/women'>Women</Link></ul>
        <ul><Link to='/store'>Store</Link></ul>
        <ul><Link to='/smart'>Smart</Link></ul>
        <ul><Link to='/offers'>Offers</Link></ul>
        <ul><Link to='/brands'>Brands</Link></ul>
        <ul><Link to='/contact'>Contact</Link></ul>
        <ul><Link to='/cart'>Cart</Link></ul>
    </div>
  )
}

export default Navbar