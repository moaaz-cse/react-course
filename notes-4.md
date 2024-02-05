# Propes

- passing arguments to a function.

# conflict driven UI(swiggy example)

# why to use key?

- in res-card list if new card is added at start, react will clean the entire container and rerender all the cards again that will be a costly issue.
- To avoid this rerender issue key is used that help react in understanding what is needed to render.
- this is how it will become fast and cost saving.
- not recommended to use index(map->indexes) for key's id as a key is an anti-pattern.
