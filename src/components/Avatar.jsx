import profilePhoto from '../assets/profile.jpg'

function Avatar() {
  return (
    <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44">
      <div className="animate-blob absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-fuchsia-400 opacity-40 blur-xl dark:opacity-30" />
      <img
        src={profilePhoto}
        alt="Zuleidy Briceno"
        className="relative h-full w-full rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-slate-900"
      />
    </div>
  )
}

export default Avatar
