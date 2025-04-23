// We'll need React Router's hook to navigate around
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const routeToShop = () => {
    navigate('items-list');
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1635450789923-55288ec4ec52?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
