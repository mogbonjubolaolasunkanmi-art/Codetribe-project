function Header() {
  return (
    <header className="flex h-20 items-center justify-end border-b border-gray-100 px-8">

      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="text-xl">
          🔔
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
            👤
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Alex Johnson
            </p>

            <p className="text-xs text-gray-400">
              User
            </p>
          </div>

          <span>⌄</span>

        </div>

      </div>

    </header>
  );
}

export default Header;