interface FooterProps {
  showPoweredBy?: boolean
}

export function Footer({ showPoweredBy = true }: FooterProps) {
  return (
    <footer className="bg-muted/30 border-t border-border py-6">
      <div className="max-w-md mx-auto px-4 text-center">
        {showPoweredBy && (
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-semibold text-foreground">PointCare</span>
          </p>
        )}
      </div>
    </footer>
  )
}
