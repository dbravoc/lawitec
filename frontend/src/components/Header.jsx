import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoLawitec from '../assets/images/logo fondo blanco lawitec negro.jpg'
import isabella from '../assets/images/isabella.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'


const user = {
  name: 'Isabella Varela',
  email: 'tom@example.com',
  imageUrl: isabella,
}
const navigation = [
  { name: 'Seguimiento', href: '#', current: true, icon: faUsers },
  { name: 'Solicitudes', href: '#', current: false, icon: faUsers },
  { name: 'Contratos', href: '#', current: false, icon: faUsers },
  { name: 'Reportes', href: '#', current: false, icon: faUsers },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default 
function Header() {
  return (
    <div className="grid grid-cols-7 h-screen">
      {/* Menú lateral */}
      <div className="col-span-1 bg-white text-gray-900 flex flex-col items-center">
  
      {/* Logo */}
      <div className="py-4">
        <img
          className="h-12 w-auto"
          src={logoLawitec} // Asegúrate de haber importado la imagen como se describió previamente
          alt="Logo Lawitec"
        />
      </div>

      {/* Listado de Opciones */}
      <nav className="flex flex-col space-y-2 py-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${item.current ? 'bg-gray-900 text-white' : ''}`}
          aria-current={item.current ? 'page' : undefined}
        >
          <FontAwesomeIcon icon={item.icon} className="mr-2" />
          {item.name}
        </a>
        ))}
      </nav>

  {/* Perfil y Opciones */}
  <div className="py-4 flex flex-col justify-center items-center">
    <img
      className="h-16 w-16 rounded-full"
      src={user.imageUrl}
      alt=""
    />
    <div className='text-sm font-medium'>
    {user.name}
    </div>
  </div>

  {/* Notificaciones */}
  <div className="py-4">
    <button type="button" className="text-gray-700 hover:text-gray-900">
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>

  </div>
  
  
  
  <div className="col-span-6 bg-gray-100">
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Solicitudes</h1>
    </div>
  </header>
  <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* Contenido del Dashboard */}
    </div>
  </main>
</div>
      </div>
  );
}
