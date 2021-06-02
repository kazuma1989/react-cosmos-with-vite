export default {
  forms: (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@gmail.com"
      />

      <label htmlFor="id">User id (read only)</label>
      <input readOnly name="id" id="id" value="04D6H89Z" />

      <label htmlFor="disabled">Random disabled input</label>
      <input
        disabled
        name="disabled"
        id="disabled"
        placeholder="Because why not?"
      />

      <label htmlFor="about">About me</label>
      <textarea
        name="about"
        id="about"
        placeholder="I am a textarea..."
      ></textarea>

      <label>Choose a Doe:</label>
      <div>
        <input type="radio" id="john" name="drone" value="john" checked />
        <label htmlFor="john">John Doe</label>
      </div>
      <div>
        <input type="radio" id="jane" name="drone" value="jane" checked />
        <label htmlFor="jane">Jane Doe</label>
      </div>
      <div>
        <input type="radio" id="johnny" name="drone" value="johnny" checked />
        <label htmlFor="johnny">Johnny Doe</label>
      </div>
      <br />
      <input type="checkbox" name="remember" id="remember" checked />

      <label htmlFor="remember">Remember me</label>

      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
  ),
};
