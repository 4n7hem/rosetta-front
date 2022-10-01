type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

export function Button( { children }: ButtonProps ) {
  return (
    <button>
        {children}
    </button>
    );
}
