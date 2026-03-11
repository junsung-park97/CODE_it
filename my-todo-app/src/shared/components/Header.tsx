// src/shared/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[60px] border-b border-slate-200 flex items-center px-8 md:px-12 lg:px-[240px]">
      <Link href="/" className="flex items-center">
        {/* 모바일: Small 로고 */}
        <Image
          src="/images/logo/Size=Small.png"
          alt="할 일 관리 로고"
          width={71}
          height={40}
          className="block md:hidden"
          priority
        />
        {/* 태블릿 이상: Large 로고 */}
        <Image
          src="/images/logo/Size=Large.png"
          alt="할 일 관리 로고"
          width={151}
          height={40}
          className="hidden md:block"
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
