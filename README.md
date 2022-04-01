### TASK #1 - JavaScript

Implement `prepareData` higher order function, which takes an object of filter params `{year, customerName}`, and returns a function that processes a list of missions, by only showing the ones that were launched in `year` and carried a payload belonging to `customerName`.

**Observations:**

- You can use any **utility** library you see fit
- Missions should appear in inverse chronological order (sort), with the exception of those that carried more payloads should appear first.
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers.
- It doesn't matter to which `customerName` 'program' each payload belongs to as long as `customerName` is the customer.

**Example:**

Considering we have the list of missions from this [data fixture][data-fixture], and the following filter params:

```js
{
  year: 2018,
  customerName: "NASA"
}
```

The expected result should be:

```js
[
  {
    flight_number: 62,
    mission_name: 'Iridium NEXT Mission 6',
    payloads_count: 2,
  },
  {
    flight_number: 72,
    mission_name: 'CRS-16',
    payloads_count: 1,
  },
  {
    flight_number: 64,
    mission_name: 'CRS-15',
    payloads_count: 1,
  },
  {
    flight_number: 60,
    mission_name: 'TESS',
    payloads_count: 1,
  },
  {
    flight_number: 59,
    mission_name: 'CRS-14',
    payloads_count: 1,
  },
];
```

---

### TASK #2 - React & Hooks

Implement `RocketsList` component with the following specifications:

1. It takes `filerParams` object (with shape described in [task #1][task-1]) as a prop
2. It obtains a list of 'missions' from a [custom hook][custom-hook], which uses [global fetch][global-fetch] (`window.fetch`) to _GET_ **the whole list of missions** from [SpaceX API][spacex-api] and processes them with `prepareData` function (from [task #1][task-1]) and `filterParams` prop
3. For each 'mission' obtained from the custom hook, it renders a string using [template literals][template-literals] with the following format: "#`flight_number` `mission_name` (`payloads_count`)"
4. While 'missions' are being fetched from API, it renders `"Loading..."` to screen
5. If no 'missions' are obtained from the custom hook, it renders `"No data"` to screen

**Observations:**

- Missions processing with `prepareData` must happen **inside** the custom hook
- The list of missions should be re-processed if `filterParams` prop changes, **BUT no new API calls should happen** to [SpaceX API][spacex-api]
- You are not allowed to use any of the filter parameters provided by the [SpaceX API docs][spacex-api-docs], just fetch all available data and process it with `prepareData` function
- Only [global fetch][global-fetch] (`window.fetch`) can be used to make API requests

**Example:**

Considering we pass the following `filterParams` as a prop:

```js
{
  year: 2018,
  customerName: "NASA"
}
```

The expected render should be:

```txt
#62 Iridium NEXT Mission 6 (2)
#72 CRS-16 (1)
#64 CRS-15 (1)
#60 TESS (1)
#59 CRS-14 (1)
```

## Helpful links

- [SpaceX API Docs][spacex-api-docs]
- [Inviting collaborators to a personal repository][github-collaborators]

[spacex-api]: https://api.spacexdata.com/v3/launches/past
[spacex-api-docs]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
