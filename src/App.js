import BlogPage from './pages/BlogPage';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';



export default function App() {

  return (
    <div className=' w-screen min-h-screen text-[12px] overflow-hidden'>
      
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blog/:blogId' element = {<BlogPage/>}/>
        <Route path='/tags/:tag' element = {<TagPage/>}/>
        <Route path='/categories/:category' element = {<CategoryPage/>}/>
      </Routes>
    </div>
  );
}
