import SideNav from '@/app/ui/dashboard/sidenav';

 //ts 传变量有类型，children是props的一个
 //layout的优点：部分渲染，不刷新全部页面
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/*左边的目录 */}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}