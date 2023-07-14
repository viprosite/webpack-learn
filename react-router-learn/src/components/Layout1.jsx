import { NavLink, Link, Outlet, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";

import { getContacts, createContact } from "../contacts";

export async function loader({ request }) {
  let url = new URL(request.url);
  let q = url.searchParams.get('q');
  const contacts = await getContacts(q)
  return { contacts, q }
}
export async function action() {
  const contact = await createContact()
  return redirect(`/contacts/${contact.id}/edit`)
}

export default function Layout() {
  // const { contacts, q } = useLoaderData();
  // const navigation = useNavigation()
  let q = 1
  let contacts = {}
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q')

  // useEffect(() => {
  //   document.getElementById('q').value = q
  // }, [q])

  // let submit = useSubmit();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              className={searching ? 'loading' : ''}
              name="q"
              defaultValue={q}
              onChange={(e) => {
                let isFirstSearch = q === null;
                // submit(e.currentTarget.form, { replace: !isFirstSearch })
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ''}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div >
      <div id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}

