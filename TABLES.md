
<style>
    .bold {
        font-weight: bold;
    }
</style>
<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>GET</th>
      <th>POST</th>
      <th>PUT</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="bold">/employer</td>
      <td>-</td>
      <td>
        <div>[OP] create new employer</div>
        <div>[201] employer created successfully -> returns employer {eid}</div>
        <div>[400] invalid data -> returns error message</div>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td class="bold">/employer/{id}</td>
      <td>
        <div>[OP] get details of employer {id}</div>
        <div>[200] successful retrieval of employer</div>
        <div>[404] employer not found</div>
      </td>
      <td>-</td>
      <td>
        <div>[OP] update details of employer {id}</div>
        <div>[204] successful update</div>
        <div>[409] some fields can not be updated</div>
      </td>
      <td>
        <div>[OP] delete employer {id}</div>
        <div>[204] successful deletion</div>
        <div>[404] employer not found</div>
      </td>
    </tr>
    <tr>
      <td class="bold">/project</td>
      <td>-</td>
      <td>
        <div>[OP] submit new project</div>
        <div>[201] project submitted successfully -> returns project {pid}</div>
        <div>[400] invalid data -> returns error message</div>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td class="bold">/project/{pid}</td>
      <td>
        <div>[OP] get details of project {pid}</div>
        <div>[200] successful retrieval of project</div>
        <div>[404] project not found</div>
      </td>
      <td>-</td>
      <td>
        <div>[OP] update details of project {pid}</div>
        <div>[204] successful update of project detail</div>
        <div>[409] some fields can not be updated</div>
      </td>
      <td>
        <div>[OP] delete project {pid}</div>
        <div>[204] successful deletion</div>
        <div>[404] project not found</div>
      </td>
    </tr>
    <tr>
      <td class="bold">/employee</td>
      <td>-</td>
      <td>
        <div>[OP] register new employee</div>
        <div>[201] employee registered successfully</div>
        <div>[400] invalid data -> returns error message</div>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td class="bold">/employee/{id}</td>
      <td>
        <div>[OP] get details of employee {id}</div>
        <div>[201] successful retrieval of employee</div>
        <div>[404] employee not found</div>
      </td>
      <td>-</td>
      <td>
        <div>[OP] update details of employee {id}</div>
        <div>[204] successful update</div>
        <div>[409] some fields can not be updated</div>
      </td>
      <td>
        <div>[OP] delete employee {id}</div>
        <div>[204] successful deletion</div>
        <div>[404] employee not found</div>
      </td>
    </tr>
    <tr>
      <td class="bold">/employee/{eid}/project/{pid}/request</td>
      <td>-</td>
      <td>
        <div>[OP] employee {eid} submits a request for project {pid}</div>
        <div>[204] successful submission</div>
        <div>[400] invalid request -> returns error message</div>
      </td>
      <td>-</td>
      <td>
        <div>[OP] employee {eid} removes their request on project {pid}</div>
        <div>[204] successful deletion</div>
        <div>[404] request on project for this employee not found</div>
      </td>
    </tr>
  </tbody>
</table>