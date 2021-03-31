<% vintosTintos.forEach(product=> { %>
    <section class="col-5 col-md-3 col-lg-2 producto-box">
      <figure class="imagen-producto">
        <img src="/images/<%- product.image %> " alt="">
      </figure>
      <% if (product.free_shipping> 0) { %>
        <div class="envio-promo"><span>Envio gratis</span></div>
        <% } %>
          <% if (product.discount> 0) { %>
            <div class="descuento"><span>
                <%- product.discount %> % OFF
              </span></div>
            <% } %>
              <article class="datos-articulo">
                <h2>
                  <%-product.title%>
                </h2>
                <div class="precio">
                  <% if (product.discount> 0) { %>
                  <span class="precio-real">$<%- toThousand(product.price) %> </span>
                  <% } %>
                  <span class="precio-desc">$<%- toThousand(product.price - Math.round(product.price / 100 * product.discount)) %> </span>
                </div>
                <div class="button-agregar">
                  <form action="/products/detail/<%- product.id %>" method="GET">
                  <button type="submit" class="button-compra">Agregar</button>
                </form>
                </div>
              </article>
    </section>
    <% }) %>