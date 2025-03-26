const useLocalStorage = () => {
  function getItem(name: string): string | null {
    const item = localStorage.getItem(name);
    return item;
  }

  function setItem(name: string, value: string): void {
    void localStorage.setItem(name, value);
  }

  function destroy(name: string): void {
    void localStorage.removeItem(name);
  }

  function destroyAll(): void {
    void localStorage.clear();
  }

  return {
    getItem,
    setItem,
    destroy,
    destroyAll,
  };
};

export { useLocalStorage };
