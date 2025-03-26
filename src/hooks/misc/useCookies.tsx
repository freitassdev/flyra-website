import Cookies from "universal-cookie";

//PS: NO ELECTRON OS COOKIES SAO EXCLUIDOS APOS FECHAR O APP
const useCookies = () => {
  const cookies = new Cookies(null, { path: "/" });

  async function getCookie(name: string): Promise<string | undefined> {
    const cookie = await cookies.get(name);
    return cookie;
  }

  function setCookie(name: string, value: string): void {
    void cookies.set(name, value);
  }

  function destroy(name: string): void {
    void cookies.remove(name);
  }

  function destroyAll(): void {
    const allCookies = cookies.getAll();
    Object.keys(allCookies).forEach((cookieName) => {
      cookies.remove(cookieName, { path: "/" });
    });
  }

  return {
    getCookie,
    setCookie,
    destroy,
    destroyAll,
  };
};
export { useCookies };
