import React from 'react';
import '../styles/signIn.css';
import PageLayout from './PageLayout.jsx';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="kinde-layout-page kinde-layout-page-alignment-center"
      data-kinde-layout-page="true"
      data-kinde-layout-page-alignment="center"
    >
      <PageLayout className="kinde-layout-page-main" data-kinde-layout-page-main="true">
        <article className="kinde-layout-page-card" data-kinde-layout-page-card="true">
          <header className="kinde-layout-page-card-header" data-kinde-layout-page-card-header="true">
            <div className="kinde-layout-page-branding" data-kinde-layout-page-branding="true">
              <a
                className="kinde-layout-page-logo"
                data-kinde-layout-page-logo="true"
                href="https://lawconnect.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/assets/sign-in/logo" alt="Visit LawConnect" />
              </a>
            </div>
            <h1
              className="kinde-heading kinde-heading-variant-large"
              data-kinde-heading="true"
              data-kinde-heading-variant="large"
            >
              Welcome back
            </h1>
            <div className="kinde-layout-page-description" data-kinde-layout-page-description="true">
              <p>Enter your email and we&apos;ll send a sign in code.</p>
            </div>
          </header>
          <div className="kinde-layout-widget" data-kinde-layout-widget="true" data-page-title="Sign in | LawConnect">
            <div className="kinde-layout-widget-content" data-kinde-layout-widget-content="true">
              <form
                className="kinde-form"
                data-kinde-form="true"
                method="post"
                name="sign_in_credentials"
                onSubmit={handleSubmit}
              >
                <div
                  className="kinde-form-field kinde-form-field-variant-select-text"
                  data-kinde-form-field="true"
                  data-kinde-form-field-variant="select-text"
                >
                  <label className="kinde-control-label" data-kinde-control-label="true" htmlFor="sign_in_email">
                    Email
                  </label>
                  <input
                    className="kinde-control-select-text"
                    data-kinde-control-select-text="true"
                    data-kinde-control-select-text-variant="text"
                    id="sign_in_email"
                    name="email"
                    type="email"
                    autoCapitalize="off"
                    autoComplete="email"
                    autoFocus
                    inputMode="email"
                    required
                    spellCheck="false"
                  />
                </div>
                <button
                  className="kinde-button kinde-button-variant-primary"
                  data-kinde-button="true"
                  data-kinde-button-variant="primary"
                  type="submit"
                >
                  <span className="kinde-button-text" data-kinde-button-text="true">
                    Continue
                  </span>
                </button>
              </form>
              <p className="kinde-choice-separator" data-kinde-choice-separator="true">
                Or
              </p>
              <form className="kinde-form" data-kinde-form="true" name="sso_sign_ins" onSubmit={handleSubmit}>
                <ul className="kinde-layout-auth-buttons" data-kinde-layout-auth-buttons="true">
                  <li data-kinde-layout-auth-buttons-item="true">
                    <button
                      className="kinde-button kinde-button-variant-secondary"
                      data-kinde-button="true"
                      data-kinde-button-variant="secondary"
                      type="button"
                    >
                      <span data-kinde-button-icon="true" data-kinde-button-icon-name="custom_icon_google">
                        <svg
                          className="kinde-icon kinde-icon-size-medium"
                          data-kinde-icon="true"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#4285F4"
                            d="M30.363 16.337c0-.987-.088-1.925-.238-2.837H16v5.637h8.087c-.362 1.85-1.424 3.413-3 4.476v3.75h4.826c2.825-2.613 4.45-6.463 4.45-11.026"
                          />
                          <path
                            fill="#34A853"
                            d="M16 31c4.05 0 7.438-1.35 9.913-3.637l-4.826-3.75c-1.35.9-3.062 1.45-5.087 1.45-3.912 0-7.225-2.638-8.413-6.2H2.612v3.862C5.075 27.625 10.137 31 16 31"
                          />
                          <path
                            fill="#FBBC05"
                            d="M7.588 18.863A8.7 8.7 0 0 1 7.112 16c0-1 .175-1.963.476-2.863V9.275H2.612a14.83 14.83 0 0 0 0 13.45z"
                          />
                          <path
                            fill="#EA4335"
                            d="M16 6.938c2.212 0 4.188.762 5.75 2.25l4.275-4.276C23.438 2.487 20.05 1 16 1 10.137 1 5.075 4.375 2.612 9.275l4.975 3.862c1.188-3.562 4.5-6.2 8.413-6.2Z"
                          />
                        </svg>
                      </span>
                      <span className="kinde-button-text" data-kinde-button-text="true">
                        Continue with Google
                      </span>
                    </button>
                  </li>
                  <li data-kinde-layout-auth-buttons-item="true">
                    <button
                      className="kinde-button kinde-button-variant-secondary"
                      data-kinde-button="true"
                      data-kinde-button-variant="secondary"
                      type="button"
                    >
                      <span data-kinde-button-icon="true" data-kinde-button-icon-name="custom_icon_microsoft">
                        <svg
                          className="kinde-icon kinde-icon-size-medium"
                          data-kinde-icon="true"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="#F25022" d="M15.2 0H0v15.2h15.2z" />
                          <path fill="#7FBA00" d="M32 0H16.8v15.2H32z" />
                          <path fill="#00A4EF" d="M15.2 16.8H0V32h15.2z" />
                          <path fill="#FFB900" d="M32 16.8H16.8V32H32z" />
                        </svg>
                      </span>
                      <span className="kinde-button-text" data-kinde-button-text="true">
                        Continue with Microsoft
                      </span>
                    </button>
                  </li>
                </ul>
              </form>
              <p className="kinde-fallback-action" data-kinde-fallback-action="true">
                <span data-kinde-fallback-action-helper-text="true">No account? </span>
                <a
                  className="kinde-text-link kinde-text-link-is-inline"
                  data-kinde-text-link="true"
                  data-kinde-text-link-is-inline="true"
                  href="/en-us/for-lawyers/sign-up"
                >
                  Create one
                </a>
              </p>
            </div>
            <p
              className="kinde-util-hide-visually"
              data-kinde-live-region="true"
              data-kinde-live-region-copy-to-clipboard="Copied to clipboard"
              data-kinde-live-region-copy-to-clipboard-alt="Copied"
              data-kinde-live-region-form-loading="Form loading"
              data-kinde-live-region-form-submit="Form submitting"
              role="alert"
            />
          </div>
        </article>
      </PageLayout>
    </div>
  );
}

export default SignIn;

